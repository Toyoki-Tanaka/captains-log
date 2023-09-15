const React = require('react')
class Show extends React.Component {
    render() {
        const logs = this.props.logs

        return (
            <div>
                <h1> Show Page</h1>
                <h2>Title: {logs.title}</h2>
                <h2>Entry: {logs.entry}</h2>
                <h2>Ship is broken: {logs.shipIsBroken.toString()}</h2>
                <a href="/logs">Go back to main</a>
            </div>
        );
    }
}
module.exports = Show;