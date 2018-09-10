<?php
defined('ABSPATH') or die("you do not have acces to this page!");

$this->fields = $this->fields + array(
        'use_country' => array(
            'page' => 'cookie_settings',
            'type' => 'checkbox',
            'label' => __("Use geolocation", 'complianz'),
            'comment' => $this->premium_geo_ip.__('If enabled, the cookie warning will not show for countries without a cookie law.','complianz'),
            'table' => true,
            'disabled' => true,
            'default' => false, //setting this to true will set it always to true, as the get_cookie settings will see an empty value
        ),

        'a_b_testing' => array(
            'page' => 'cookie_settings',
            'type' => 'checkbox',
            'label' => __("Enable A/B testing", 'complianz'),
            'comment' => $this->premium_ab_testing.__('If enabled, the plugin will track which cookie warning has the best conversion rate.','complianz'),
            'table' => true,
            'disabled' => true,
            'default' => false, //setting this to true will set it always to true, as the get_cookie settings will see an empty value
        ),

        'a_b_testing_duration' => array(
            'page' => 'cookie_settings',
            'type' => 'number',
            'label' => __("Duration of the A/B testing period", 'complianz'),
            'table' => true,
            'disabled' => true,
            'condition' => array('a_b_testing' => true),
            'default' => 30, //setting this to true will set it always to true, as the get_cookie settings will see an empty value
        ),

        'position' => array(
            'page' => 'cookie_settings',
            'type' => 'select',
            'label' => __("Popup position", 'complianz'),
            'options' => array(
                'bottom' => __("Banner bottom", 'complianz'),
                'bottom-left' => __("Floating left", 'complianz'),
                'bottom-right' => __("Floating right", 'complianz'),
                'center' => __("Center", 'complianz'),
                'top' => __("Banner top", 'complianz'),
                'static' => __("Push down", 'complianz'),
            ),
            'default' => 'bottom',
            'table' => true,
            'has_variations' => true,
        ),
        'theme' => array(
            'page' => 'cookie_settings',
            'type' => 'select',
            'label' => __("Style", 'complianz'),
            'options' => array(
                'block' => __("Block", 'complianz'),
                'classic' => __("Classic", 'complianz'),
                'edgeless' => __("Edgeless", 'complianz'),
                'minimal' => __("Minimal", 'complianz'),
            ),
            'default' => 'edgeless',
            'table' => true,
            'has_variations' => true,
        ),

        'message' => array(
            'page' => 'cookie_settings',
            'type' => 'editor',
            'translatable' => true,
            'default' => __("We use cookies to optimize our website and our service.", 'complianz'),
            'label' => __("Cookie message", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),
        'dismiss' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Deny", 'complianz'),
            'label' => __("Dismiss text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => false),
        ),
        'save_preferences' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Save preferences", 'complianz'),
            'label' => __("Save settings text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => true),
        ),
        'view_preferences' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("View preferences", 'complianz'),
            'label' => __("View preferences text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => true),
        ),
        'category_functional' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Functional cookies", 'complianz'),
            'label' => __("Functional cookies text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => true),
        ),
        'category_all' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => cmplz_get_cookie_categories_text(),
            'comment' => __("It depends on your settings if what cookies should be listed here. The default value will be based on the settings you enter in the wizard", 'complianz'),
            'label' => __("Accept all cookies text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => true),
        ),
        'category_stats' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Statistics", 'complianz'),
            'label' => __("Statistics cookies text", 'complianz'),
            'comment' => __("It depends on your settings if this category is necessary, so it will conditionally show", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => true),
        ),
        'accept' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Accept", 'complianz'),
            'label' => __("Accept text", 'complianz'),
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_categories' => false),
        ),
        'revoke' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Revoke", 'complianz'),
            'label' => __("Revoke text", 'complianz'),
            'table' => true,
            'help'  => __('The text that appears on the revoke button, when the policy is accepted','complianz'),
            'has_variations' => true,
            'condition' => array('use_categories' => false),
        ),
        'readmore' => array(
            'page' => 'cookie_settings',
            'type' => 'text',
            'translatable' => true,
            'default' => __("Read more", 'complianz'),
            'label' => __("Read more text", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),

        'use_categories' => array(
            'page' => 'cookie_settings',
            'type' => 'checkbox',
            'label' => __("Use categories", 'complianz'),
            'comment' => __('If enabled, the popup will show checkboxes with categories.','complianz'),
            'table' => true,
            'has_variations' => true,
            'default' => false, //setting this to true will set it always to true, as the get_cookie settings will see an empty value
        ),

        'popup_background_color' => array(
            'page' => 'cookie_settings',
            'type' => 'colorpicker',
            'default' =>  '#37a8de',
            'label' => __("Popup background color", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),

        'popup_text_color' => array(
            'page' => 'cookie_settings',
            'type' => 'colorpicker',
            'default' => '#fff',
            'label' => __("Popup text color", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),
        'button_background_color' => array(
            'page' => 'cookie_settings',
            'type' => 'colorpicker',
            'default' => '#fff',
            'label' => __("Button background color", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),
        'button_text_color' => array(
            'page' => 'cookie_settings',
            'type' => 'colorpicker',
            'default' => '#37a8de',
            'label' => __("Button text color", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),

        'border_color' => array(
            'page' => 'cookie_settings',
            'type' => 'colorpicker',
            'default' => '#fff',
            'label' => __("Border color", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),

        'cookie_expiry' => array(
            'page' => 'cookie_settings',
            'type' => 'number',
            'default' => 365,
            'label' => __("Cookie warning expiration in days", 'complianz'),
            'table' => true,
            'has_variations' => true,
        ),

        'use_custom_cookie_css' => array(
            'page' => 'cookie_settings',
            'type' => 'checkbox',
            'label' => __("Use Custom CSS", 'complianz'),
            'default' => false,
            'table' => true,
            'has_variations' => true,
        ),

        'custom_css' => array(
            'page' => 'cookie_settings',
            'type' => 'css',
            'label' => __("Custom CSS", 'complianz'),
            'default' => '.cc-message{} /* styles for the message box */'."\n".'.cc-dismiss{} /* styles for the dismiss button */'."\n".'.cc-allow{} /* styles for the accept button */'."\n".'.cc-window{} /* styles for the popup banner */',
            'table' => true,
            'has_variations' => true,
            'condition' => array('use_custom_cookie_css' => true),
        ),

//        'height' => array(
//            'page' => 'cookie_settings',
//            'type' => 'number',
//            'label' => __("Height of banner", 'complianz'),
//            'default' => '',
//            'table' => true,
//        ),

    );
