<?php

namespace geoffry304\readmore;


class ReadMoreColumnAsset extends \yii\web\AssetBundle
{
    public function init(){
        $this->setSourcePath(__DIR__.'/assets');
        $this->setupAssets('js', ['js/readmore']);
        $this->setupAssets('css', ['css/readmore']);
        parent::init();
    }
}
