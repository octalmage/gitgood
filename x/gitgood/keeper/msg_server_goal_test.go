package keeper

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/octalmage/gitgood/x/gitgood/types"
)

func TestGoalMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateGoal(ctx, &types.MsgCreateGoal{Creator: creator})
		require.NoError(t, err)
		assert.Equal(t, i, int(resp.Id))
	}
}

func TestGoalMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateGoal
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateGoal{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateGoal{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateGoal{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateGoal(ctx, &types.MsgCreateGoal{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateGoal(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestGoalMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteGoal
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteGoal{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteGoal{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteGoal{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateGoal(ctx, &types.MsgCreateGoal{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteGoal(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
