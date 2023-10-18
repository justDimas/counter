import React from "react";
import './country.css'

class Country extends React.Component{
	constructor(){
		super()
		this.state = Country.defaultProps.emptyState
	}

	static defaultProps = {
		emptyState:{
			country: '',
			img: 'https://wichtech.com/wp-content/uploads/2016/09/noimg.jpg',
			alt: 'noimg',
			name: 'none',
			capital: 'none',
			languages: 'none'
		}
	}

	countryInputed = async (e)=>{
		e.preventDefault()
		try{
			const response = await fetch(`https://restcountries.com/v3.1/name/${this.state.country}?fields=name,capital,flags,languages`)
			if(!response.ok) 
				throw new Error('Country Not Found')
			const data = await response.json()
			const {flags, name, capital, languages} = data[0]
			this.setState({
				country: name.common,
				img: flags.png,
				alt: flags.alt,
				name: name.common,
				capital: capital.join(', '),
				languages: Object.values(languages).join(', ')
			})
		}
		catch(err){
			console.error(err)
			this.setState(Country.defaultProps.emptyState)
		}
	}

	inputChanged = (e)=>{
		this.setState({
			country: e.target.value
		})
	}

	render(){
		return (
			<div className="container">
				<div className='country'>
					<div className="country__body">
						<figure className="country__image-box">
							<img className="country__image" src={this.state.img} alt={this.state.alt}/>
							<figcaption className="country__name">Name: {this.state.name}</figcaption>
						</figure>
						<div className="country__capital">Capital: {this.state.capital}</div>
						<div className="country__languages">Languages: {this.state.languages}</div>
					</div>
					<form className="country__form" onSubmit={this.countryInputed}>
						<input className="country__input control" value={this.state.country} onChange={this.inputChanged} placeholder="country"/>
						<button className="country__button control">Search</button>
					</form>
				</div>
			</div>
		)		
	}
}


export default Country