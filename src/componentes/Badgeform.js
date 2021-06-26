import React from 'react'

class Badgeform extends React.Component {


    handleClick=(e)=>{
        console.log('El boton fue clikeado');
    };

    handleSubmit=(e)=>{
        e.preventDefault();
        console.log("el formulario fue enviado :)")
        console.log(this.state);
    }

    render() {
        return (
            <div className="">
            <h1>nuevo formulario</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Nombre</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="nombre" 
                        value={this.props.formValues.nombre}
                        />
                    </div>

                    <div className="form-group">
                        <label >Apellido</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="apellido"
                            value={this.props.formValues.apellido}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label >Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email"
                            value={this.props.formValues.email}
                        />
                    </div>
                    <div className="form-group">
                        <label >Trabajo</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="trabajo"
                            value={this.props.formValues.trabajo}
                        />
                    </div>

                    <div className="form-group">
                        <label >Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="titter"
                            value={this.props.formValues.titter}
                        />
                    </div>

                    <button type="submit" onClick={this.handleClick} className="btn btn-success">guardar</button>
                </form>
                
                
            </div>
        )
    }
}

export default Badgeform

