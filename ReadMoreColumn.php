<?php

namespace geoffry304\readmore;

class ReadMoreColumn extends \kartik\grid\DataColumn {
    public function init() {
        $this->_view = $this->grid->getView();
        ReadMoreColumnAsset::register($this->_view);
        $this->format = "html";
        if ($this->attribute) {
            $this->value = '<div class="less_text">' . $this->attribute . '</div>';
        } else {
            $this->value = NULL;
        }
        parent::init();
    }

}
