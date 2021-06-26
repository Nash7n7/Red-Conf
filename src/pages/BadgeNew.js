import React from 'react';
//import Navbar from '../componentes/Navbar';
import header from '../img/badge-header.svg';
import '../componentes/estilos/BadgeNew.css';
import Badge from '../componentes/Badge';
import avatar from '../img/zack1.jpg'
import Badgeform from '../componentes/Badgeform'

class BadgeNew extends React.Component {

    state={ form:{
        nombre:'',
        apellido:'',
        email:'',
        trabajo:'',
        titter:'',
    } };

    handleChange = e => {
    
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value

            },
        });
    };

    render() {
        return (
            <React.Fragment>
                
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">

                            <Badge
                                nombre={this.state.form.nombre}
                                apellido={this.state.form.apellido}
                                email={this.state.form.email}
                                titter={this.state.form.titter}
                                trabajo={this.state.form.trabajo}
                                avatarUrl={avatar} />
                        </div>
                        <div className ="col-6">
                            <Badgeform onChange={this.handleChange} 
                            formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew
