// ListeningForSemicolons.svelte
<script>
    function alertMe() {
        alert('You pressed a semicolon!');
    }
</script>
<textarea on:keypress="{(e) => {
    if (e.key === ';') {
        alertMe();
    }
}}">
</textarea>