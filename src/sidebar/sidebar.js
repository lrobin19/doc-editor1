import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebaritem/sidebarItem';

class SidebarComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            addingNote: false,
            title: null,
            search: ''
        };
    }

    render() {

        const { notes, classes, selectedNoteIndex } = this.props;
        if (notes) {
            let filteredNotes = notes.filter(
                (note) => {
                    return note.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            );
            return (
                <div className={classes.sidebarContainer}>
                    <input
                        type='text'
                        placeholder='Search Notes'
                        value={this.state.search}
                        onChange={this.searchNotes.bind(this)}
                        onKeyPress={(e) => this.handle(this.state.search, e)}
                        className={classes.search}/>
                    <Button
                        onClick={this.newNoteBtnClick}
                        className={classes.newNoteBtn}>{this.state.addingNote ? 'Cancel' : 'New Note'}</Button>
                    {
                        this.state.addingNote ?
                            <div>
                                <input type='text'
                                    className={classes.newNoteInput}
                                    placeholder='Enter note title'
                                    onKeyUp={(e) => this.updateTitle(e.target.value)}>
                                </input>
                                <Button
                                    className={classes.newNoteSubmitBtn}
                                    onClick={this.newNote}>Submit Note</Button>
                            </div> :
                            null
                    }
                    <List>
                        {
                            filteredNotes.map((_note, _index) => {
                                return (
                                    <div key={_index}>
                                        <SidebarItemComponent
                                            _note={_note}
                                            _index={_index}
                                            selectedNoteIndex={selectedNoteIndex}
                                            selectNote={this.selectNote}
                                            deleteNote={this.deleteNote}>
                                        </SidebarItemComponent>
                                        <Divider></Divider>
                                    </div>
                                )
                            })
                        }
                    </List>
                </div>
            );
        } else {
            return(<div></div>);
        }
    }

    newNoteBtnClick = () => {
        this.setState({ title: null, addingNote: !this.state.addingNote });
    }
    updateTitle = (txt) => {
        this.setState({ title: txt });
    }
    newNote = () => {
        this.props.newNote(this.state.title);
        this.setState({ title: null, addingNote: false });
    }
    searchNotes(event) {
        this.setState({ search: event.target.value.substr(0, 20) });

    }

    handle(txt, event) {
        console.log("in handle " + event.which);
        if (event.which === 13) {
            console.log("in if");
            event.preventDefault(); // Ensure it is only this code that rusn
            if (txt !== '') {
                this.props.newNote(txt);
                this.setState({ title: null, addingNote: false });
            }
            console.log("Enter was pressed was presses");

        }
}
    selectNote = (n, i) => this.props.selectNote(n, i);
    deleteNote = (note) => this.props.deleteNote(note);


}

export default withStyles(styles)(SidebarComponent);