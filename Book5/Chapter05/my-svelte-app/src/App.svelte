<script>
  import ScrollToPosition from './lib/ScrollToPosition.svelte'
  
  </script>
  <ScrollToPosition />
  <style>
    /* Style error messages nested in this component's divs */
    div :global(.error){
      color: red;
    }
  </style>
