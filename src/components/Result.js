import React, { Component } from 'react';

class Result extends Component {
	constructor( props ){
		super( props );
		this.state = {
			list: []
		}
    }

    componentDidMount(){
    	this.fetchDate();
  	}

  	fetchDate(){
    	fetch( 'https://simplesurvey-8d9e3.firebaseio.com/survey.json' )
      		.then( response => response.json())
      		.then( data => {
        		console.log( data )
        		this.setState({
          			list: data
        			}, () => console.log( this.state.list ))
      			})
      		.catch( err => console.log( 'Error', err ))
  	}
	render() {
		let listArray = Object.values( this.state.list );
		return (
			<div className='list'>
				<h2>Посмотреть опросы</h2>
		        <ul>
		          {
		            listArray.map(( list, index ) => {
		              return (
		              	<li key={ index }>
		              		<p>Имя: { list.name }</p>
		              		<span role="img" aria-label="imac">🖥 { list.answers.q1 }</span>
		              		<span role="img" aria-label="tv">📺 { list.answers.q2 }</span>
		              		<span role="img" aria-label="iphone">📱 { list.answers.q3 }</span>
		              		<span role="img" aria-label="cpu">🤖 { list.answers.q4 }</span>
		                </li>
		                )
		            })
		          }
		        </ul>
		    </div>
		);
	}
}

export default Result;