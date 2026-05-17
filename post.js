async function getPost(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        if (!response.ok) { throw new Error('Request failed with status ', response.status) }
        return await response.json()
    } catch (error) {
        console.log(error)
        return null
    }
}

async function getComments(postId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        if (!response.ok) { throw new Error('Request failed with status ', response.status) }
        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}

function renderPost(post) {
    if (!post) { return '<div>Post not found</div>' }

    return `
    <h2>Post:</h2>
        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
    `
}

function renderComments(comments) {
    if (comments.length === 0) { return '<div>Comments not found</div>' }

    return `
        <div>
            <h3>Comments:</h3>
            ${comments.map(comment => `
                <div>
                    <h4>${comment.name}</h4>
                    <p><a href="mailto:${comment.email}">${comment.email}</a></p>
                    <p>${comment.body}</p>
                </div>
            `).join('')}
        </div>
    `
}

async function init() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get('id')

    if (!id) {
        document.getElementById('post-details').innerHTML = '<div>Invalid post ID</div>'
        return
    }

    const post = await getPost(id)
    document.getElementById('post-details').innerHTML = renderPost(post)

    const comments = await getComments(id)
    document.getElementById('post-comments').innerHTML = renderComments(comments)
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}