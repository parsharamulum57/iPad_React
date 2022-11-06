
import React from "react";
import './Screen.css';
import Header from "./Header";
import LockScreen from "./LockScreen";
import HomeScreen from "./HomeScreen";
import GamesScreen from "./GamesScreen";
import GameImages from "./GameImages";
import SongImages from "./SongImages";
import SongsScreen from "./SongsScreen";
import ThemesScreen from "./ThemesScreen";
import ThemeImages from "./ThemeImages";
import AppsScreen from "./AppsScreen";
import AppImages from "./AppImage";

export default function Screen(props){

    
    let displayScreen;
    //console.log("Props ",props.childLevel);
    if(props.locked===true)
    {
        displayScreen=(
            <LockScreen />
        );
    }
    else if(props.childLevel===0)
    {
        displayScreen=(
            <HomeScreen 
                homeMenuItemIndex={props.homeMenuItemIndex}
                
            />
        );
    }
    else if(props.childLevel===1)
    {
         if(props.homeMenuItemIndex===0)
         {
            displayScreen=(
                <GamesScreen 
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===1)
         {
            displayScreen=(
                <SongsScreen 
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===2)
         {
            displayScreen=(
                <ThemesScreen 
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===3)
         {
            displayScreen=(
                <AppsScreen 
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }

    }
    else if(props.childLevel===2)
    {
        if(props.homeMenuItemIndex===0)
         {
            displayScreen=(
                <GameImages 
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===1)
         {
            displayScreen=(
                <SongImages
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===2)
         {
            displayScreen=(
                <ThemeImages
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
         else if(props.homeMenuItemIndex===3)
         {
            displayScreen=(
                <AppImages
                    subMenuItemIndex={props.subMenuItemIndex}
                />
            );
         }
    }








    
        //console.log("props", this.props);
        return (
            <div id="screen-container">
                <Header />
                {displayScreen}
            </div>
        )
    }

