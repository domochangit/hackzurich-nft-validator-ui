import React, {Component, useEffect, useState} from "react";
import "./searchbar.css"
import styled from "styled-components";
import {TextInput} from "@mantine/core";

class Searchbar extends Component{
    constructor(props){
        super(props);
        this.state={
            error: null,
            results: [],
            query: '',
            beforeQuery: ''
        }
        this.updateQuery = this.updateQuery.bind(this);
        this.updateResults = this.updateResults.bind(this);
        this.updateMiddle = this.updateMiddle.bind(this);
        this.hasResults = this.hasResults.bind(this);
    }
componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {
        if (prevState.query !== this.state.query){
            /*
            fetch("https://backend-velasiraptor-gvom4czscq-oa.a.run.app/search", {
                method: 'POST',
                headers: {"Content-Type": "text/plain"},
                body: this.state.query
            }).then((res) => res.json())
            */

            fetch("./../../static-data.json").then((res) => res.json())
                .then((result) => {
                    if (result.err !== undefined){
                        this.setState({error: result});
                    }else {
                        this.setState({results: result});
                        this.props.setResult(result);
                    }});

        }
        if (prevState !== this.state.results){
            this.updateResults()
        }
}
updateResults(){
        this.props.setResult(this.state.results);
}
updateQuery(){
        this.setState({query: this.state.beforeQuery});
}
updateMiddle(queryInfo){
        this.setState({beforeQuery: queryInfo});
}
    hasResults(){
        if(this.state.results !== undefined){
               return true;
        }
    }
render() {
    return (
                <label htmlFor={'search-form'}>
                    <div className={"alignInput"}>
                    <input
                        inputMode={"text"}
                        name={"search-form"}
                        id={"search-form"}
                        className={this.hasResults() ? "higher searchbar" : "searchbar"}
                        placeholder={`Search for NFT...`}
                        onChange={e=> {
                            this.updateMiddle(e.target.value.toString());
                        }}
                        onKeyDown={e => {
                            if (e.key.toString().toLowerCase() === 'enter') {
                            this.updateQuery();
                        }
                    }
                    }
                    />
                    </div>
                </label>
        );
    }
};
const SearchIcon = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #7f77e0;
  border-radius: 50px;
  padding: 9px;
`;
export default Searchbar;