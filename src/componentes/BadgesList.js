import React from 'react';
import '../componentes/estilos/BadgesList.css';



class BadgesList extends React.Component {
    render() {
        return (
            
                <ul className="list-unstyled BadgesList">
                    {this.props.Badges.map((badge) => {
                        return (
                            <li className="" key={badge.id}>
                                <img src={badge.avatarUrl} alt="" className="BadgesListItem__avatar" />
                                <div className="Badges__descrip">
                                    <div><strong>{badge.nombre} {badge.apellido}</strong></div>
                                    <div className="Twitter__name">
                                        <span className="Twitter__logo"></span>@{badge.titter}
                                    </div>
                                    <div>{badge.trabajo}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            
        );
    }
}

export default BadgesList;
