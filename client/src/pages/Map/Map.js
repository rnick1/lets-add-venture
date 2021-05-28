import React, {useState, useEffect} from 'react';
import "./Map.css"
import { FaMapMarkerAlt } from "react-icons/fa"
import SearchBar from "../../components/SearchBar/SearchBar";
import ResultsBar from "../../components/ResultsBar/ResultsBar";
import ClimbCard from "../../components/ClimbCard";
import Button from 'react-bootstrap/Button'
import API from '../../utils/API'


function Map() {

    const [climbData, setClimbData] = useState([]);
    const [query, setQuery] = useState('')
    const [filterYSP, setFilterYSP] = useState('')

function searchHandler (e) {
    console.log(query)
    API.getClimb(query)
        .then(response => setClimbData(response.data))

    console.log(climbData)


}

    return (
        <div className="container map-background">
            <div className="title"> Where Will you go? <FaMapMarkerAlt /></div>
            <div className="map-page">
                {/* embed map - you can move it!*/}
                <div className="map-section">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5983711.268700046!2d-112.0420401103968!3d42.92065026338209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875ee23448e12e69%3A0x26b02279d27d382f!2sWyoming!5e0!3m2!1sen!2sus!4v1621446154360!5m2!1sen!2sus" width="500" height="450" style={{ border: 0, borderRadius: "2%" }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="search-bar pt-4">
                <input type='text' onChange= {event => setQuery(event.target.value)} />
                <Button onClick= { searchHandler }> Search </Button>
                </div>

                {climbData.length ? (
                    <div> 
                    <ClimbCard
                        climbTitle= {climbData[0].name}
                        FrAsc = {climbData[0].fa}
                        difficulty = {climbData[0].yds}
                        crag= {climbData[0].meta_parent_sector}
                    />     
                    </div>
                ) : (<h4>Search for a climb!</h4>)
                
                }
            </div>
        </div >
    )
}

export default Map;