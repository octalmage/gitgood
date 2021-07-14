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

func CmdCreateAchievement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-achievement [achievementID] [owner]",
		Short: "Create a new achievement",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsAchievementID, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsOwner, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateAchievement(clientCtx.GetFromAddress().String(), argsAchievementID, argsOwner)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateAchievement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-achievement [id] [achievementID] [owner] [createdAt]",
		Short: "Update a achievement",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsAchievementID, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsOwner, err := cast.ToStringE(args[2])
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

			msg := types.NewMsgUpdateAchievement(clientCtx.GetFromAddress().String(), id, argsAchievementID, argsOwner, argsCreatedAt)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteAchievement() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-achievement [id]",
		Short: "Delete a achievement by id",
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

			msg := types.NewMsgDeleteAchievement(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
