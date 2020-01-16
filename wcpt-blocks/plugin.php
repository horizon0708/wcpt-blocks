<?php
   /*
   Plugin Name: WCPT custom blocks
   description: >-
    wcpt custom plugin to add blocks
   Version: 1.2.1
   Author: James Kim
   */ 
function loadWcptBlock() {
  wp_enqueue_script(
    'wcpt-custom-blocks',
    plugin_dir_url(__FILE__) . './index.js',
    array('wp-blocks','wp-editor'),
    true
  );
}
   
add_action('enqueue_block_editor_assets', 'loadWcptBlock');