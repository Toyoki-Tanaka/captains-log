const React = require('react');

class Edit extends React.Component {
    render() {
        return (
            <form action={`/logs/${this.props.logs._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" /> <br />
                Entry: <input type="textarea" name="entry" /> <br />
                Is ship broken? <input type="checkbox" name="shipIsBroken" /> <br />
                <input type='submit' value='Submit Changes' />
            </form>
        )
    }
}

module.exports = Edit;