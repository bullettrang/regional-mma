import App, {Container}  from 'next/app';       //this wraps around all 
import Page from '../src/Page';

class MyApp extends App{

    
    render(){
        const { Component} = this.props

        return(
            <Container>
                <Page>
                    <Component/>
                </Page>
            </Container>
        )
    }
}

export default MyApp;