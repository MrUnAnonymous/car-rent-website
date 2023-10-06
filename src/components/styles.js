import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        flexDirection: 'column'
    },
    cardGrid:{
        //padding: '0px 0px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0,
    },
    mainGrid: {
        minHeight: '100vh'
    },
    cardGridItem:{
        margin: 0,
        minHeight: '100vh'
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        boxSizing: 'border-box',
        borderRadius: '20px',
        maxHeight: '400px',
        minHeight: '150px'
    },
    media:{
        paddingTop: '56.25%',
        borderRadius: '20px',
        marginBottom: '5px',
        height: '100%',
        width: '100%'
    },
    cardContent:{
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 0,
        padding: 0
    },
    year: {
        fontSize: '12px',
        fontWeight: 550,
        border: 'dotted',
        borderWidth: '1px',
        padding: '3px 10px',
        borderRadius: '30%',
        borderColor: 'teal'
    },
    content: {
        flexGrow: '1',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        gap: '10px',
    },
    contentItem: {
        width: '120px',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center'
    },
    action: {
        display: 'flex',
        justifyContent: 'row',
    },
    actionButton1: {
        width: '30px',
        fontSize: '12px',
        backgroundColor: '#00bfff44',
        minWidth: 0,
        borderRadius: '10px'
    },
    actionButton2: {
        fontSize: '12px',
        width: '80px',
        backgroundColor: '#00bfff',
    }
}))

export default useStyles;