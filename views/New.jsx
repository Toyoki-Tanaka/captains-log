const React = require('react');

class New extends React.Component {
    render() {
        return (
            <form action="/logs" method="POST">
                Title: <input type="text" name="title" /> <br />
                Entry: <input type="textarea" name="entry" /> <br />
                Is ship broken? <input type="checkbox" name="shipIsBroken" /> <br />
                <input type="submit" value="Submit form" /> <br />
            </form>
        )
    }
}

module.exports = New;