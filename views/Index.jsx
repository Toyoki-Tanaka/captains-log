const React = require("react")

class Index extends React.Component {
    render() {
        const { logs } = this.props
        return (
            <div>
                <h1>Index Page</h1>
                <a href="/logs/new">Create a new log</a>
                <br />
                <br />
                {
                    logs.map((log, i) => {
                        return (
                            // <li key={i}>
                            //     Title: {log.title}
                            // </li>
                            <>
                                <a href={`/logs/${log._id}`} key={i}>{log.title}</a> <br />
                                <a href={`/logs/${log._id}/edit`}>Edit this entry</a>
                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value='DELETE' />
                                </form>
                            </>
                        )
                    }
                    )
                }
            </div>
        )
    }
}

module.exports = Index