export function add (props) {
    let team = []
    const local = JSON.parse(localStorage.getItem('team'))
    if(local){
        team = local
        team.push(props)
    }else{
        team[0]= props
    }
    localStorage.setItem('team', JSON.stringify(team))
    console.log(JSON.parse(localStorage.getItem('team')))
    }
export function remove (props) {
    
    }
export function get (props) {
        
    }
