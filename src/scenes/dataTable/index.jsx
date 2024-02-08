import { computeFlexColumnsWidth } from "@mui/x-data-grid/hooks/features/columns/gridColumnsUtils";
import { getRowIdFromRowModel } from "@mui/x-data-grid/hooks/features/rows/gridRowsUtils";
import React from "react";

class App extends React.Component {
    // Constructor
    constructor(props) {
        super(props);
 
        this.state = {
            items: [],
            DataisLoaded: false,
        };

        this.zillowQuery = {
            "searchQueryState": {
                "pagination": {
                    "currentPage": 1
                },
                "isMapVisible": false,
                "mapBounds": {
                    "west": -93.4676456451416,
                    "east": -93.06595802307129,
                    "south": 44.90823161327342,
                    "north": 45.01414914862255
                },
                "filterState": {
                    "sortSelection": {
                        "value": "globalrelevanceex"
                    },
                    "isForSaleByAgent": {
                        "value": false
                    },
                    "isForSaleByOwner": {
                        "value": false
                    },
                    "isNewConstruction": {
                        "value": false
                    },
                    "isComingSoon": {
                        "value": false
                    },
                    "isAuction": {
                        "value": false
                    },
                    "isForSaleForeclosure": {
                        "value": false
                    },
                    "isRecentlySold": {
                        "value": true
                    },
                    "isAllHomes": {
                        "value": true
                    }
                },
                "isListVisible": true,
                "mapZoom": 12
            },
            "wants": {
                "cat1": [
                    "listResults",
                    "mapResults"
                ]
            },
            "requestId": 14,
            "isDebugRequest": false
        }
    }

    

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        console.log('mounted');

        const zillowUrl = "https://www.zillow.com/async-create-search-page-state";
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.zillowQuery)
        };

        fetch(zillowUrl, requestOptions)
            .then(res => res.json())
            .then(data => this.setState({ items: data, DataisLoaded: true}))
    }
    render() {
        const { DataisLoaded, items } = this.state;

        if (!DataisLoaded)
            return (
                <div>
                    <h1> Fetching data from zillow... </h1>
                </div>
            );
 
        return (
            <div className="App">
                <h1 className="geeks">GeeksforGeeks</h1>
                <h3>Fetch data from an api in react</h3>
                <div className="container">
                    {items.map((item) => (
                        <div className="item">
                            <ol key={item.id}>
                                <div>
                                    <strong>
                                        {"User_Name: "}
                                    </strong>
                                    {item.username},
                                </div>
                                <div>
                                    Full_Name: {item.name},
                                </div>
                                <div>
                                    User_Email: {item.email}
                                </div>
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
 
export default App;