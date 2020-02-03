{
    "targets": [{
        "target_name": "addon",
        "cflags!": [ "-fno-exceptions" ],
        "cflags_cc!": [ "-fno-exceptions" ],
        "sources": [
            "native/main.cpp",
            "native/test.cpp",
            # include other cpps:
            # "<!@(node -p \"require('./build-tools/build-tools').includeAllCpp('native')\")",
            # "<!@(node -p \"require('./build-tools/build-tools').includeAllCpp('native/core')\")",
            # "<!@(node -p \"require('./build-tools/build-tools').includeAllCpp('native/utils')\")",
            # "<!@(node -p \"require('./build-tools/build-tools').includeAllCpp('native/test')\")",
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")"
        ],
        'libraries': [],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        # with no exceptions :
        # 'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ]
        # with exceptions :
        'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES',
            'CLANG_CXX_LIBRARY': 'libc++',
            'MACOSX_DEPLOYMENT_TARGET': '10.7',
        },
        'msvs_settings': {
            'VCCLCompilerTool': { 'ExceptionHandling': 1 },
        },
        'conditions': [
            ['OS=="win"', { 'defines': [ '_HAS_EXCEPTIONS=1' ] }]
        ]        
    }]
}