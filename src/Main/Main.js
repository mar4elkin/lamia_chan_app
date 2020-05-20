import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { apiWorker } from '../Api/apiWorker';
import { connect } from 'react-redux'

class Main extends React.Component {
    constructor(){
      super()
      this.state = {
        manga: [],
        isLoading: true
      }
    }
    // todo дописать вывод манги
    async componentDidMount(){
      await apiWorker(this.props.mangaLink).then(response => {
          this.setState({
                manga : response,
                isLoading: false
            })
        })
    }
  
    render(){
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text >
                kek
            </Text>
        </View>
      );
    }
  }
  
  //Parce Redax data into React props
  const mapStateToProps = (state)=>{
    return {
      mangaLink: state.apiLinks.manga
    }
  }
  
  
export default connect(mapStateToProps) (Main);
