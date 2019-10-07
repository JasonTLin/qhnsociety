import React, {Component} from 'react';
import './Feed.css';

class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {
            instagram_data: []
        }
    }

    componentDidMount(){
        fetch("https://www.instagram.com/queensuniversity/?__a=1")
        .then(response => response.json())
        .then(data => this.setState({instagram_data: data.graphql.user.edge_owner_to_timeline_media.edges}))
        .catch(function(error){
            console.log(error);
        }
        )
    }

    render(){
        const elements = this.state.instagram_data;
        return(
            <div className="feed-box card no-padding">
                <h3>Our Lastest Feed!</h3>
                <div className="row no-margin">
                {
                    elements.map((value, index) => {
                        return (
                        <div className="col-sm-auto" key={index}>
                        <div className="card center" style={{width: "18rem"}}>
                        <img src={value.node.display_url} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <p className="card-text">{value.node.edge_media_to_caption.edges[0].node.text}</p>
                        </div>
                        </div>
                        </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default Feed;