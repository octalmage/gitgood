package gitgood

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/octalmage/gitgood/x/gitgood/keeper"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the stat
	for _, elem := range genState.StatList {
		k.SetStat(ctx, *elem)
	}

	// Set stat count
	k.SetStatCount(ctx, genState.StatCount)

	// Set all the team
	for _, elem := range genState.TeamList {
		k.SetTeam(ctx, *elem)
	}

	// Set team count
	k.SetTeamCount(ctx, genState.TeamCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all stat
	statList := k.GetAllStat(ctx)
	for _, elem := range statList {
		elem := elem
		genesis.StatList = append(genesis.StatList, &elem)
	}

	// Set the current count
	genesis.StatCount = k.GetStatCount(ctx)

	// Get all team
	teamList := k.GetAllTeam(ctx)
	for _, elem := range teamList {
		elem := elem
		genesis.TeamList = append(genesis.TeamList, &elem)
	}

	// Set the current count
	genesis.TeamCount = k.GetTeamCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
