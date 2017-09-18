<?php

namespace geoffry304\readmore;

use kartik\base\AssetBundle;

class ReadMoreColumnAsset extends AssetBundle
{
    public function init(){
        $this->setSourcePath(__DIR__.'/assets');
        $this->setupAssets('js', ['js/readmore']);
        $this->setupAssets('css', ['css/readmore']);
        parent::init();
    }
}
