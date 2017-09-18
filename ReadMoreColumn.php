<?php

namespace geoffry304\readmore;

use yii\helpers\Html;
class ReadMoreColumn extends \kartik\grid\DataColumn {
  public function init() {
      $this->_view = $this->grid->getView();
      ReadMoreColumnAsset::register($this->_view);
      $this->format = "html";
      parent::init();
  }


    /**
     * @inheritdoc
     */
    public function renderDataCell($model, $key, $index)
    {
        $this->initPjax($this->_clientScript);
        $options = $this->fetchContentOptions($model, $key, $index);
        Html::addCssClass($options, 'less_text');
        return Html::tag('td', $this->renderDataCellContent($model, $key, $index), $options);
    }

}
