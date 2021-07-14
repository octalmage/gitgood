package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/types"
	"strconv"
)

// GetTeamCount get the total number of team
func (k Keeper) GetTeamCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamCountKey))
	byteKey := types.KeyPrefix(types.TeamCountKey)
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

// SetTeamCount set the total number of team
func (k Keeper) SetTeamCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamCountKey))
	byteKey := types.KeyPrefix(types.TeamCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendTeam appends a team in the store with a new id and update the count
func (k Keeper) AppendTeam(
	ctx sdk.Context,
	team types.Team,
) uint64 {
	// Create the team
	count := k.GetTeamCount(ctx)

	// Set the ID of the appended value
	team.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&team)
	store.Set(GetTeamIDBytes(team.Id), appendedValue)

	// Update team count
	k.SetTeamCount(ctx, count+1)

	return count
}

// SetTeam set a specific team in the store
func (k Keeper) SetTeam(ctx sdk.Context, team types.Team) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	b := k.cdc.MustMarshalBinaryBare(&team)
	store.Set(GetTeamIDBytes(team.Id), b)
}

// GetTeam returns a team from its id
func (k Keeper) GetTeam(ctx sdk.Context, id uint64) types.Team {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	var team types.Team
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetTeamIDBytes(id)), &team)
	return team
}

// HasTeam checks if the team exists in the store
func (k Keeper) HasTeam(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	return store.Has(GetTeamIDBytes(id))
}

// GetTeamOwner returns the creator of the team
func (k Keeper) GetTeamOwner(ctx sdk.Context, id uint64) string {
	return k.GetTeam(ctx, id).Creator
}

// RemoveTeam removes a team from the store
func (k Keeper) RemoveTeam(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	store.Delete(GetTeamIDBytes(id))
}

// GetAllTeam returns all team
func (k Keeper) GetAllTeam(ctx sdk.Context) (list []types.Team) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TeamKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Team
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetTeamIDBytes returns the byte representation of the ID
func GetTeamIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetTeamIDFromBytes returns ID in uint64 format from a byte array
func GetTeamIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
