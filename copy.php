<?php
ini_set ("display_errors", "1");
error_reporting(E_ALL);
//header('Content-type: text/plain; charset=utf-8');
require 'File/MARC.php';

// copy batch2 to batch1.

unlink('./batch/batch.mrc');
rename ('./batch/batch2.mrc', './batchbatch.mrc');