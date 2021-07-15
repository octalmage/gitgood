package cli

import (
	"github.com/spf13/cobra"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

var _ = strconv.Itoa(0)

func CmdGetTeamExp() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "getTeamExp [team]",
		Short: "Get the total experience for a team",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			reqTeam := string(args[0])

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetTeamExpRequest{

				Team: string(reqTeam),
			}

			res, err := queryClient.GetTeamExp(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
