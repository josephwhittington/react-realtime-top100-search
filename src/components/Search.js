import React, { Component } from  'react'
import { Data } from '../resources/hot100'
import Header  from './Header'
import SearchBox from './SearchBox'
import Songs from './Songs';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            data: Data,
            filterdData: []
        }

        // Bound events
        this.onKeyUp = this.onKeyUp.bind(this)
        this.initFilteredData = this.initFilteredData.bind(this)
    }

    componentDidMount() {
        document.getElementById('search-box').focus()
        this.initFilteredData()
    }

    componentWillUpdate() {
        document.getElementById('search-box').focus()
    }

    initFilteredData() {
        this.setState({filterdData: [...this.state.data]})
    }

    onKeyUp(event) {
        let filter = event.target.value.toLowerCase()
        console.log(filter)
        if(filter.length == 0) {
            console.log('dfdsfsdf')
            this.initFilteredData()
        } else {
            this.setState({
                filterdData: this.state.data.filter(item => {
                    let { title, artist, rank } = item
                    if(artist.toLowerCase().includes(filter) || title.toLowerCase().includes(filter)) {
                        return true
                    } else {
                        return false
                    }
                })
            })
        }
    }

    render() {
        return (
            <div>
                <Header />
                <h2>Search:</h2>
                <SearchBox onKeyUp={this.onKeyUp} />
                <Songs songs={this.state.filterdData}/>
            </div>
        )
    }
}