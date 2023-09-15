const React = require("react")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
                <h1>Index Page</h1>
                <a href="/logs/new">Create a new log</a>
                <ul>
                    {
                        logs.map((log, i) => {
                            return (
                                <li key={i}>
                                    Title: {log.title}
                                </li>
                            )

                        }
                        )
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index