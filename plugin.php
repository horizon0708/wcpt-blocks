<?php
   /*
   Plugin Name: WCPT custom blocks
   description: >-
    wcpt custom plugin to add blocks
   Version: 0.0.3
   Author: James Kim
   */ 
function loadWcptBlock() {
  wp_enqueue_script(
    'wcpt-custom-blocks',
    plugin_dir_url(__FILE__) . '/build/index.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadWcptBlock');