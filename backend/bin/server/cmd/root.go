package cmd

import (
	"fmt"
	"os"
	"sha/backend/common"
	"sha/backend/server"
	"sha/backend/store"

	"github.com/spf13/cobra"
)

// -----------------------------------Global constant BEGIN----------------------------------------
const (
	// greetingBanner is the greeting banner.
	// http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=SHA%20STARTER
	greetingBanner = `

███████╗██╗  ██╗ █████╗     ███████╗████████╗ █████╗ ██████╗ ████████╗███████╗██████╗ 
██╔════╝██║  ██║██╔══██╗    ██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗
███████╗███████║███████║    ███████╗   ██║   ███████║██████╔╝   ██║   █████╗  ██████╔╝
╚════██║██╔══██║██╔══██║    ╚════██║   ██║   ██╔══██║██╔══██╗   ██║   ██╔══╝  ██╔══██╗
███████║██║  ██║██║  ██║    ███████║   ██║   ██║  ██║██║  ██║   ██║   ███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
																																													
____________________________________________________

`

	// byeBanner is the bye banner.
	// http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=BYE
	byeBanner = `
██████╗ ██╗   ██╗███████╗
██╔══██╗╚██╗ ██╔╝██╔════╝
██████╔╝ ╚████╔╝ █████╗
██╔══██╗  ╚██╔╝  ██╔══╝
██████╔╝   ██║   ███████╗
╚═════╝    ╚═╝   ╚══════╝

`
)

var rootCmd = &cobra.Command{
  Use:   "SHA",
  Short: "Self Hosted App (AKA: SHA)",
  Long: `Self Hosted App Starter is a template to help you get started with a self hosted app.
  	Complete documentation is available at http://github.com/xiaoluoboding/self-hosted-app-starter`,
  Run: func(cmd *cobra.Command, args []string) {
		profile := common.GetProfile()
		m := Main{
			profile: profile,
		}

    fmt.Printf(greetingBanner)

		err := m.init()

		if err != nil {
			fmt.Printf("%+v\n", err)
			os.Exit(1)
		}
  },
}

type Main struct {
	profile *common.Profile
}

func (m *Main) init() error {
	db := store.NewDB(m.profile)
	if err := db.Open(); err != nil {
		return fmt.Errorf("cannot open db: %w", err)
	}

	s := server.NewServer(m.profile)

	storeInstance := store.New(db)
	s.Store = storeInstance

	if err := s.Run(); err != nil {
		return err
	}

	return nil
}


func Execute() {
  if err := rootCmd.Execute(); err != nil {
    fmt.Println(err)
    os.Exit(1)
  }
}