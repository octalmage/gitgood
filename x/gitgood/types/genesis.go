package types

import (
	"fmt"
	// this line is used by starport scaffolding # ibc/genesistype/import
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # ibc/genesistype/default
		// this line is used by starport scaffolding # genesis/types/default
		StatList: []*Stat{},
		TeamList: []*Team{},
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # ibc/genesistype/validate

	// this line is used by starport scaffolding # genesis/types/validate
	// Check for duplicated ID in stat
	statIdMap := make(map[uint64]bool)

	for _, elem := range gs.StatList {
		if _, ok := statIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for stat")
		}
		statIdMap[elem.Id] = true
	}
	// Check for duplicated ID in team
	teamIdMap := make(map[uint64]bool)

	for _, elem := range gs.TeamList {
		if _, ok := teamIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for team")
		}
		teamIdMap[elem.Id] = true
	}

	return nil
}
