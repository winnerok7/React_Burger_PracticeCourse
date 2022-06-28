import React from "react";
import AddBurgerForm from "./AddBurgerForm";
import EditBurgerForm from "./EditBurgerForm";
import PropTypes from 'prop-types';
import firebase from "firebase/app";

class MenuAdmin extends React.Component {

   state = {
      photo: '',
      user: ''
   }

   static propTypes = {
      burgers: PropTypes.object,
      deleteBurger: PropTypes.func,
      updateBurger: PropTypes.func,
      addBurger: PropTypes.func,
      loadSampleBurgers: PropTypes.func
   }

   componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
         if (user) {
            this.authHandler({ user })
         }
      })
   }

   authHandler = async authData => {
      const { email, photoURL } = authData.user
      this.setState({ user: email, photo: photoURL })
   }

   render() {
      const { user, photo } = this.state;
      const avatar = photo ? photo : '/images/avatar.png';
      return (
         <div className='menu-admin'>
            {user ? (<div className='login-header'>
               <div className='avatar'>
                  <img src={avatar} alt={user} />
               </div>
               <button className='buttonLogout' onClick={this.props.handleLogout}>Log out</button>
            </div>
            ) : null}
            <h2>Admin Panel</h2>
            {Object.keys(this.props.burgers).map(key => {
               return <EditBurgerForm deleteBurger={this.props.deleteBurger} updateBurger={this.props.updateBurger} key={key} index={key} burger={this.props.burgers[key]} />
            })}
            <AddBurgerForm addBurger={this.props.addBurger} />
            <button onClick={this.props.loadSampleBurgers}>Upload Burgers</button>
         </div>
      )
   }


}

export default MenuAdmin;