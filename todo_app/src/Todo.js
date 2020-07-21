import React from 'react'
import { List, ListItem, ListItemText, ListItemAvatar } from '@material-ui/core'

function Todo(props) {
    return (
            <List>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary='Dummy Dedline'/>
                </ListItem>
            </List>  
    )
}

export default Todo
