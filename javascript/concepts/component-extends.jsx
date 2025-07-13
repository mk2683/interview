
class A extends React {
    constructor(props){
        super(props);
        this.state= {
            label: ""
        }
        this.handleClickMeBtnParent = this.handleClickMeBtnParent.bind(this);
    }

    handleClickMeBtnParent(label){
        this.setState(()=>{
            label: label
        })
    }

    render(){

        return(
            <div>
                <B handleClickMeBtnParent={handleClickMeBtnParent} />
                <C label={label} />
            </div>
        )
    }
}

class B extends React {
    constructor(props){
        super(props);
        this.handleClickMeBtn = this.handleClickMeBtn.bind(this);
    }
    handleClickMeBtn(e){
        let label = e.target.value;
        this.props.handleClickMeBtnParent(label);
    }

    render(){

        return(
            <div>
                <button name="clickMeBtn" onclick={()=>{this.handleClickMeBtn()}}>Click Me</button>
                <button name="clickMeBtn2" onclick={()=>{this.handleClickMeBtn()}}>Click Me2</button>
                <button name="clickMeBtn3" onclick={()=>{this.handleClickMeBtn()}}>Click Me3</button>
                <button name="clickMeBtn4" onclick={()=>{this.handleClickMeBtn()}}>Click Me4</button>
                <button name="clickMeBtn5" onclick={()=>{this.handleClickMeBtn()}}>Click Me5</button>
            </div>
        )
    }
}

class C extends React {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <p>
                {this.props.label ? this.props.label : ""}
            </p>
        )
    }
}