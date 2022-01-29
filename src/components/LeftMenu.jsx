import React from 'react'
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

import Menu from './Menu'
import MenuList from './MenuList'
import MenuPlayList from './MenuPlayList'
import TrackList from './TrackList'

import '../styles/LeftMenu.css'

function LeftMenu() {
	return (
		<div class='leftMenu'>
			<div class='logoContainer'>
				<div className="logo">
		          	<i>
		            	<FaSpotify />
		          	</i>

		          	<h2>Spotify</h2>
		        </div>
		        <i>
		          	<FaEllipsisH />
		        </i>
			</div>

			<div className="searchBox">
		        <input type="text" placeholder="Search..." />
		        <i>
		          	<BiSearchAlt />
		        </i>
		    </div>

		    <Menu title={"Menu"} listObject={MenuList} />

		    <MenuPlayList />

		    <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
		</div>
	)
}

export default LeftMenu