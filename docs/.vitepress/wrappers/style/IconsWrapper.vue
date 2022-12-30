<template>
    <div>
        <h1>Sizes</h1>
        <my-icons :items="sizeIcons"></my-icons>

        <h1>User Icons</h1>
        <my-icons :items="userIcons"></my-icons>

        <h1>Crud Icons</h1>
        <my-icons :items="crudIcons"></my-icons>

        <h1>Navigation</h1>
        <my-icons :items="navigationIcons"></my-icons>

        <h1>Field</h1>
        <my-icons :items="fieldIcons"></my-icons>

        <h1>Collapse</h1>
        <my-icons :items="collapseIcons"></my-icons>

        <h1>Action</h1>
        <my-icons :items="actionIcons"></my-icons>

        <h1>Processing</h1>
        <my-icons :items="processIcons"></my-icons>

        <h1>Reactions</h1>
        <my-icons :items="reactionIcons"></my-icons>

        <h1>File</h1>
        <my-icons :items="fileIcons"></my-icons>

        <h1>Misc</h1>
        <my-icons :items="miscIcons"></my-icons>

        <h1>Severity</h1>
        <my-icons :items="severityIcons"></my-icons>

        <h1>Menu</h1>
        <my-icons :items="menuIcons"></my-icons>

        <h1>Link</h1>
        <my-icons :items="linkIcons"></my-icons>

        <h1>Checked</h1>
        <my-icons :items="checkedIcons"></my-icons>
    </div>
</template>

<script setup lang="ts">
import MyIcons from './Icons.vue';

const fieldIcons = [
    {class : 'icon-calendar',description : ''},
    {class : 'icon-password',description : ''},
    {class : 'icon-password-hide',description : ''},
    {class : 'icon-password-show',description : ''},
];

const collapseIcons = [
    {class : 'icon-collapse',description : ''},
    {class : 'icon-expand',description : ''},
];

const actionIcons = [
    {class : 'icon-attach',description : ''},
    {class : 'icon-bookmark',description : ''},
    {class : 'icon-download',description : ''},
    {class : 'icon-export',description : ''},
    {class : 'icon-import',description : ''},
    {class : 'icon-login',description : ''},
    {class : 'icon-logout',description : ''},
    {class : 'icon-refresh',description : ''},
    {class : 'icon-unbookmark',description : ''},
    {class : 'icon-upload',description : ''},
    {class : 'icon-close',description : ''},
    {class : 'icon-close-large',description : ''},
];

const processIcons = [
    {class : 'icon-busy',description : ''},
    {class : 'icon-completed',description : ''},
    {class : 'icon-new',description : ''},
    {class : 'icon-pending',description : ''},
];

const reactionIcons = [
    {class : 'icon-comment',description : ''},
    {class : 'icon-comment-slash',description : ''},
    {class : 'icon-comments',description : ''},
    {class : 'icon-message',description : ''},
    {class : 'icon-messages',description : ''},
    {class : 'icon-question-answers',description : ''},

    {class : 'icon-best-answer',description : ''},
    {class : 'icon-dislike',description : ''},
    {class : 'icon-like',description : ''},
    {class : 'icon-love',description : ''},
    {class : 'icon-report',description : ''},
    {class : 'icon-spam',description : ''},
];

const fileIcons = [
    {class : 'icon-file-audio',description : ''},
    {class : 'icon-file-check',description : ''},
    {class : 'icon-file-document',description : ''},
    {class : 'icon-file-download',description : ''},
    {class : 'icon-file-image',description : ''},
    {class : 'icon-file-info',description : ''},
    {class : 'icon-file-locked',description : ''},
    {class : 'icon-file-pdf',description : ''},
    {class : 'icon-file-protected',description : ''},
    {class : 'icon-file-upload',description : ''},
    {class : 'icon-file-video',description : ''},
    {class : 'icon-files',description : ''},
];

const miscIcons = [
    {class : 'icon-filter',description : ''},
    {class : 'icon-idea',description : ''},
    {class : 'icon-loading fa icon-spin',description : ''},
    {class : 'icon-locked',description : ''},
    {class : 'icon-money',description : ''},
    {class : 'icon-notification',description : ''},
    {class : 'icon-protected',description : ''},
    {class : 'icon-protected-check',description : ''},
    {class : 'icon-search',description : ''},
    {class : 'icon-settings',description : ''},
    {class : 'icon-star',description : ''},
    {class : 'icon-suggestion',description : ''},
    {class : 'icon-trophy',description : ''},
    {class : 'icon-unfilter',description : ''},
    {class : 'icon-unlock',description : ''},
    {class : 'icon-unlocked',description : ''},
    {class : 'fa icon-spin',description : 'make the icon spin'},
];

const severityIcons = [
    {class : 'icon-danger',description : ''},
    {class : 'icon-help',description : ''},
    {class : 'icon-info',description : ''},
    {class : 'icon-success',description : ''},
    {class : 'icon-warning',description : ''},
];

const sizeIcons = [
    {class : 'icon-info icon-extra-small',description : 'extras small'},
    {class : 'icon-info icon-small',description : 'small'},
    {class : 'icon-info ',description : ''},
    {class : 'icon-info icon-large',description : 'large'},
    {class : 'icon-info icon-extra-large',description : 'extra large'},
];

const menuIcons = [
    {class : 'icon-breadcrumb-separator',description : ''},
    {class : 'icon-darkmode',description : ''},
    {class : 'icon-dropdown',description : ''},
    {class : 'icon-lightmode',description : ''},
    {class : 'icon-menu-item-expand',description : ''},
    {class : 'icon-menu-pull-toggle',description : ''},
    {class : 'icon-menu-toggle',description : ''},
];

const linkIcons = [
    {class : 'icon-link',description : ''},
    {class : 'icon-link-external',description : 'TODO'},
    {class : 'icon-unlink',description : ''},
];

const checkedIcons = [
    {class : 'icon-checked',description : ''},
    {class : 'icon-checked-circle',description : ''},
    {class : 'icon-checked-double',description : ''},
];

const navigationIcons = [
    {class : 'icon-dashboard',description : ''},
    {class : 'icon-home',description : ''},
    {class : 'icon-next',description : ''},
    {class : 'icon-previous',description : ''},
];

const userIcons = [
    {class : 'icon-administrators',description : ''},
    {class : 'icon-profile',description : ''},
    {class : 'icon-user-blocked',description : ''},
    {class : 'icon-user-check',description : ''},
    {class : 'icon-users',description : ''},
];

const crudIcons = [
    {class : 'icon-add',description : ''},
    {class : 'icon-clone',description : ''},
    {class : 'icon-copy-clipboard',description : ''},
    {class : 'icon-delete',description : ''},
    {class : 'icon-edit',description : ''},
    {class : 'icon-save',description : ''},
    {class : 'icon-view',description : ''},
];
</script>
