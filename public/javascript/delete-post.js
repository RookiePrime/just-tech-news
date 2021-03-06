async function deleteFormHandler(event) {
    event.preventDefault();
    
    const postRef = document.querySelector('form div a').getAttribute('href');
    const postId = postRef.slice(postRef.lastIndexOf('/') + 1);

    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}
  
document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);