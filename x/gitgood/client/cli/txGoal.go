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

func CmdCreateGoal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-goal [label] [comparison] [exp] [createdAt]",
		Short: "Create a new goal",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsLabel, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsComparison, err := cast.ToInt32E(args[1])
			if err != nil {
				return err
			}
			argsExp, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}
			argsCreatedAt, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateGoal(clientCtx.GetFromAddress().String(), argsLabel, argsComparison, argsExp, argsCreatedAt)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateGoal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-goal [id] [label] [comparison] [exp] [createdAt]",
		Short: "Update a goal",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsLabel, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsComparison, err := cast.ToInt32E(args[2])
			if err != nil {
				return err
			}

			argsExp, err := cast.ToInt32E(args[3])
			if err != nil {
				return err
			}

			argsCreatedAt, err := cast.ToInt32E(args[4])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateGoal(clientCtx.GetFromAddress().String(), id, argsLabel, argsComparison, argsExp, argsCreatedAt)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteGoal() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-goal [id]",
		Short: "Delete a goal by id",
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

			msg := types.NewMsgDeleteGoal(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
