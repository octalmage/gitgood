package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/octalmage/gitgood/x/gitgood/types"
)

func CmdCreateStat() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-stat [statType] [initial] [final] [owner]",
		Short: "Create a new stat",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsStatType, err := cast.ToInt32E(args[0])
			if err != nil {
				return err
			}
			argsInitial, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}
			argsFinal, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argsOwner, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateStat(clientCtx.GetFromAddress().String(), argsStatType, argsInitial, argsFinal, argsOwner)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateStat() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-stat [id] [statType] [initial] [final] [owner]",
		Short: "Update a stat",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsStatType, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}

			argsInitial, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}

			argsFinal, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			argsOwner, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateStat(clientCtx.GetFromAddress().String(), id, argsStatType, argsInitial, argsFinal, argsOwner)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteStat() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-stat [id]",
		Short: "Delete a stat by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteStat(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
