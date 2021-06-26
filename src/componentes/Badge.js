import React from 'react';
import baner from '../img/badge-header.svg';
//import avatar from '../img/zack1.jpg';
import '../componentes/estilos/Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img src={baner} alt="Logo de la conferencia" />
                </div>

                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src={this.props.avatarUrl}
                        alt="Avatar"
                    />
                    <h1>
                        {this.props.nombre} <br /> {this.props.apellido}
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.trabajo}</h3>  
                    <div>@{this.props.titter}</div>
                </div>

                <div className="Badge__footer">#platziconf</div>
            </div>
        );
    }
}

export default Badge;
