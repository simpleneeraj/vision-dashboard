import BlurView from "~components/view/blur-view"

import "./style.css"

import React from "react"

type GamesProps = {}

const Games: React.FC<GamesProps> = ({}) => {
  return (
    <BlurView>
      <div className="wrapper">
        <div className="rings">
          <div className="ring ring1">
            <div className="ring ring2">
              <div className="ring ring3">
                <div className="ring ring4" />
              </div>
            </div>
          </div>
        </div>
        <div className="choose-theme">
          <div
            className="theme theme1"
            // onclick="chooseTheme('#ffad00')"
          />
          <div
            className="theme theme2"
            // onclick="chooseTheme('#01c5c4')"
          />
          <div
            className="theme theme3"
            // onclick="chooseTheme('#ffa5a5')"
          />
          <div
            className="theme theme4"
            // onclick="chooseTheme('#d789d7')"
          />
          <div
            className="theme theme5"
            // onclick="chooseTheme('#f09ae9')"
          />
          <div
            className="theme theme6"
            // onclick="chooseTheme('#e7305b')"
          />
          <div
            className="theme theme7"
            // onclick="chooseTheme('#303960')"
          />
        </div>
      </div>
    </BlurView>
  )
}

export default Games
