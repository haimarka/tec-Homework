export default function Authentication({auth}) {
    return (
        <div>
            <h3>authentication</h3>
            <h4 style={{color: 'blue'}}>{auth.email}</h4>
        </div>
    )
}
