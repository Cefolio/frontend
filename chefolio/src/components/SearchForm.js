import React from 'react';

export default class SearchForm extends React.Component{
    state = {
        initialItems: [],
        items: [],

    }
    filteredList = e => {
        let items = this.state.initialItems;
        items = items.filter((item) => {
            return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;

        });
        this.setState({items:items});

    }
    componentWillMount = () => {
        this.setState({
            initialItems: this.props.content,
            items: this.props.content
        })
    }
    render(){
        return(
            <div>
                
            </div>
        )
    }
}