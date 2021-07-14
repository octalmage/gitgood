package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"strconv"
)

// GetStatCount get the total number of stat
func (k Keeper) GetStatCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatCountKey))
	byteKey := types.KeyPrefix(types.StatCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetStatCount set the total number of stat
func (k Keeper) SetStatCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatCountKey))
	byteKey := types.KeyPrefix(types.StatCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendStat appends a stat in the store with a new id and update the count
func (k Keeper) AppendStat(
	ctx sdk.Context,
	stat types.Stat,
) uint64 {
	// Create the stat
	count := k.GetStatCount(ctx)

	// Set the ID of the appended value
	stat.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&stat)
	store.Set(GetStatIDBytes(stat.Id), appendedValue)

	// Update stat count
	k.SetStatCount(ctx, count+1)

	return count
}

// SetStat set a specific stat in the store
func (k Keeper) SetStat(ctx sdk.Context, stat types.Stat) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	b := k.cdc.MustMarshalBinaryBare(&stat)
	store.Set(GetStatIDBytes(stat.Id), b)
}

// GetStat returns a stat from its id
func (k Keeper) GetStat(ctx sdk.Context, id uint64) types.Stat {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	var stat types.Stat
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetStatIDBytes(id)), &stat)
	return stat
}

// HasStat checks if the stat exists in the store
func (k Keeper) HasStat(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	return store.Has(GetStatIDBytes(id))
}

// GetStatOwner returns the creator of the stat
func (k Keeper) GetStatOwner(ctx sdk.Context, id uint64) string {
	return k.GetStat(ctx, id).Creator
}

// RemoveStat removes a stat from the store
func (k Keeper) RemoveStat(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	store.Delete(GetStatIDBytes(id))
}

// GetAllStat returns all stat
func (k Keeper) GetAllStat(ctx sdk.Context) (list []types.Stat) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StatKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Stat
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetStatIDBytes returns the byte representation of the ID
func GetStatIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetStatIDFromBytes returns ID in uint64 format from a byte array
func GetStatIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
