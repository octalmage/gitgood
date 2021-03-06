package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/octalmage/gitgood/x/gitgood/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group gitgood queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	// this line is used by starport scaffolding # 1

	cmd.AddCommand(CmdGetTeamExp())

	cmd.AddCommand(CmdListAchievement())
	cmd.AddCommand(CmdShowAchievement())

	cmd.AddCommand(CmdListGoal())
	cmd.AddCommand(CmdShowGoal())

	cmd.AddCommand(CmdListStat())
	cmd.AddCommand(CmdShowStat())

	cmd.AddCommand(CmdListTeam())
	cmd.AddCommand(CmdShowTeam())

	return cmd
}
